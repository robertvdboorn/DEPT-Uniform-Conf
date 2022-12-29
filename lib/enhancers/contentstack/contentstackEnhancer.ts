import getConfig from "next/config";
import { createContentstackEnhancer } from '@uniformdev/canvas-contentstack';
import contentstack from "contentstack";

export const contentstackEnhancer = () => {
    const { serverRuntimeConfig } = getConfig();
    const { contentstackEnvironment, contentstackRegion, contentstackDeliveryToken, contentstackApiKey } = serverRuntimeConfig;

    const client = contentstack.Stack({
        api_key: contentstackApiKey,
        delivery_token: contentstackDeliveryToken,
        environment: contentstackEnvironment,
        region: contentstackRegion,
    });

    return createContentstackEnhancer({ client });
};