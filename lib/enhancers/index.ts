import { compose, EnhancerBuilder } from "@uniformdev/canvas";
import getConfig from "next/config";

import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";
import { contentfulEnhancer } from "./contentful/contentfulEnhancer";
import { contentfulModelConverter } from "./contentful/contentfulModelConverter";
import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";
import { STRAPI_PARAMETER_TYPES } from "@uniformdev/canvas-strapi";
import {
  CANVAS_ALGOLIA_QUERY_PARAMETER_TYPES,
  CANVAS_ALGOLIA_RECORD_PARAMETER_TYPES,
} from '@uniformdev/canvas-algolia';

const { serverRuntimeConfig } = getConfig();
const {
    contentfulSpaceId,
  contentfulDeliveryToken,
  contentfulEnvironment,
} = serverRuntimeConfig;

const contentfulConfigured: boolean =
  contentfulSpaceId !== undefined && contentfulDeliveryToken !== undefined && contentfulEnvironment !== undefined;
export const enhancers = new EnhancerBuilder();

if (contentfulConfigured) {
  enhancers.parameterType(CANVAS_CONTENTFUL_PARAMETER_TYPES, compose(contentfulEnhancer(), contentfulModelConverter))
}

enhancers.parameter((e) => {
  if (typeof e.parameter.value === "string") {
    return e.parameter.value.replace(/personalization/gi, "p13n");
  }
});