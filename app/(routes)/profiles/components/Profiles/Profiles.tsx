import { Button } from "@/components/ui/button";
import { ProfileProps } from "./Profiles.type";
import { AddProfile } from "../../AddProfile";

export function Profiles(props : ProfileProps) {
    const {users} = props
    console.log({users});

    return (
        <div>
            <div className="flex gap-7">
                <p>Usuarios de perfiles...</p>
                <AddProfile />
            </div>
            <div className="mt-16 flex intems-center justify-center">
                <Button 
                variant="outline"
                size="lg"
                className="text-gray-500 border-gray-500 hover:bg-gray-700 hover:text-white"
                // onClick={() => console.log("click")}
                >Administrar perfiles</Button>
            </div>
        </div>
    );
}