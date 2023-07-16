import { Preset } from "@stegano/token-transformer";
import { removeEmptyLines } from "../../post-processors";
import { toJson } from "../../pre-processors";
import template from "./zeplin-css.hbs";

/**
 * A preset that converts design tokens created in Zeplin into CSS file
 */
export const ZeplinCss: Preset = {
  preProcessors: [toJson],
  postProcessors: [removeEmptyLines],
  template,
  outputFile: {
    ext: "css",
  },
};

export default ZeplinCss;
