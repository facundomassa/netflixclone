'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Terms() {
    const [showExtraTerms, setShowExtraTerms] = useState(false); 
    return (
        <div className='text-xs mt-4 mb-18 text-gray-600 max-w-72'>
            <div className='mb-5'>
                <span>
                    Esta pagina utiliza google reCaptcha para verificar que eres humano.
                </span>
                <Button 
                variant="ghost"
                className='opacity-1 text-[#0071eb] hover:bg-transparent p-0 nl-1 h-fit'
                onClick={() => setShowExtraTerms(!showExtraTerms)}>
                Mas informacion
                </Button>
            </div>
            <div className='h-28'>
                {showExtraTerms && 
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                }
            </div>
        </div>
    );
}