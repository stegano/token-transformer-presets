import { Preset } from "@stegano/token-transformer";
import { removeEmptyLines } from "../../post-processors";
import { toJson } from "../../pre-processors";
import template from "./zeplin-scss.hbs";

/**
 * A preset that converts design tokens created in Zeplin into SCSS file
 */
export const ZeplinScss: Preset = {
  preProcessors: [toJson],
  postProcessors: [removeEmptyLines],
  template,
  outputFile: {
    ext: "scss",
  },
};

export default ZeplinScss;
