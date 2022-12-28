import getConfig from "next/config";
import { createKontentEnhancer, KontentClientList } from '@uniformdev/canvas-kontent';
import { DeliveryClient } from '@kentico/kontent-delivery';

export const kontentEnhancer = () => {
    const { serverRuntimeConfig } = getConfig();
    const { kontentProjectId, kontentDeliveryKey } = serverRuntimeConfig;

    console.log(kontentProjectId);
    const client = new DeliveryClient({
        projectId: kontentProjectId,
        secureApiKey: kontentDeliveryKey
    });

    const clientList = new KontentClientList({ client });
    return createKontentEnhancer({ clients: clientList });
};