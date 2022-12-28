import { ComponentInstance } from '@uniformdev/canvas';

export const kontentModelConverter = ({ component, parameter }: { component: ComponentInstance; parameter: any }) => {

    console.log(parameter?.value?.elements?.image?.value[0]?.url )
    if (component.type === 'heroKontentai') {
        const returnValue = {
            title: parameter?.value?.elements?.title?.value || '', 
            description: parameter?.value?.elements?.description?.value || '', 
            buttonText: parameter?.value?.elements?.button_text?.value || '', 
            buttonLink: parameter?.value?.elements?.button_link_slug?.value || '', 
            image: parameter?.value?.elements?.image?.value[0]?.url || '',
        };

        return returnValue;    
    }
}
