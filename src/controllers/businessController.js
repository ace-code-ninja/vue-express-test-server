import { getTotalValue } from "../utils/handleArray.js";
import businesses from "../../db/businesses.json" assert { type: "json" };
import business_categories from "../../db/businessesCategories.json" assert { type: "json" };
import campaigns from "../../db/campaigns.json" assert { type: "json" };
import categories from "../../db/categories.json" assert { type: "json" };
import locations from "../../db/locations.json" assert { type: "json" };

business_categories.map((i) => {
    categories.forEach((j) => {
        if (i.categoryId === j.id) {
            i.category_name = j.name;
        }
    });
});
businesses.map((i) => {
    business_categories.forEach((k) => {
        if (i.id === k.businessId) {
            i.category_name = k.category_name;
        }
    });
    const temp = campaigns.filter((j) => i.id === j.businessId);
    const total_budget = getTotalValue(temp, "budget");
    i.campaign_num = temp.length;
    i.total_budget = total_budget;
    i.average_budget = (total_budget/temp.length).toFixed(2);
    i.campaigns = temp;
});

// Controller methods
export const BusinessController = {
    getAllBusinessData: (req, res) => {
        try {
            res.json(businesses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getBusinessDataById: (req, res) => {
        try {
            const currentBusiness = businesses.find((i) => i.id === parseInt(req.params.id));
            const location = locations.find((i) => i.businessId === parseInt(req.params.id));
            currentBusiness.latitude = location.latitude;
            currentBusiness.longitude = location.longitude;
            res.json(currentBusiness);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}