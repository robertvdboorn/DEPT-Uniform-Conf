import { ComponentInstance } from '@uniformdev/canvas';

export const contentStackModelConverter = ({ component, parameter }: { component: ComponentInstance; parameter: any }) => {
  
    if (component.type === 'heroContentstack') {
        
        const returnValue = {
            title: parameter?.value?.title || '', 
            description: parameter?.value?.description || '', 
            buttonText: parameter?.value?.button_text || '', 
            buttonLink: parameter?.value?.button_link_slug || '', 
            image: parameter?.value?.image?.url || '',
        };

        return returnValue;    
    }
}
