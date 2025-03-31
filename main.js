import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebar from "./modules/sidebar.js";

new Wrapper('#root', [header, sidebar, content, footer]);