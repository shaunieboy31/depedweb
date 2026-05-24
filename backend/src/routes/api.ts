import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { CarouselController } from "../controllers/carousel.controller";
import { ContactController } from "../controllers/contact.controller";
import { EmployeeController } from "../controllers/employee.controller";
import { IssuanceController } from "../controllers/issuance.controller";
import { LeaderController } from "../controllers/leader.controller";
import { OrgChartController } from "../controllers/org-chart.controller";
import { SchoolController } from "../controllers/school.controller";
import { TransparencyController } from "../controllers/transparency.controller";
import { UploadController } from "../controllers/upload.controller";
import { NewsController } from "../controllers/news.controller";

const router = Router();

router.get("/news", NewsController.getAll);
router.post("/news", NewsController.create);
router.put("/news/:id", NewsController.update);
router.delete("/news/:id", NewsController.delete);

router.get("/issuances", IssuanceController.getAll);
router.post("/issuances", IssuanceController.create);
router.put("/issuances/:id", IssuanceController.update);
router.delete("/issuances/:id", IssuanceController.delete);

router.get("/schools", SchoolController.getAll);
router.get("/schools/stats", SchoolController.getStats);
router.post("/schools", SchoolController.create);
router.put("/schools/:id", SchoolController.update);
router.delete("/schools/:id", SchoolController.delete);

router.get("/contact", ContactController.getInfo);
router.put("/contact", ContactController.updateInfo);

router.post("/upload", UploadController.uploadBase64);

router.get("/employee-honors", EmployeeController.getHonors);
router.post("/employee-honors", EmployeeController.createHonor);
router.put("/employee-honors/:id", EmployeeController.updateHonor);
router.delete("/employee-honors/:id", EmployeeController.deleteHonor);

router.get("/leaders", LeaderController.getAll);
router.post("/leaders", LeaderController.create);
router.put("/leaders/:id", LeaderController.update);
router.delete("/leaders/:id", LeaderController.delete);

router.get("/org-chart", OrgChartController.getAll);
router.post("/org-chart", OrgChartController.create);
router.put("/org-chart/:id", OrgChartController.update);
router.delete("/org-chart/:id", OrgChartController.delete);

router.get("/transparency", TransparencyController.getAll);
router.post("/transparency", TransparencyController.create);
router.put("/transparency/:id", TransparencyController.update);
router.delete("/transparency/:id", TransparencyController.delete);

router.get("/carousel", CarouselController.getAll);
router.post("/carousel", CarouselController.create);
router.delete("/carousel/:id", CarouselController.delete);

router.post("/auth/login", AuthController.login);

export default router;
