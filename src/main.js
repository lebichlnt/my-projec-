import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

const render = (content, container) => {
    container.innerHTML = content();
};

router.on("/", () => render(HomePage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/product", () => render(ProductPage, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));

router.resolve();
