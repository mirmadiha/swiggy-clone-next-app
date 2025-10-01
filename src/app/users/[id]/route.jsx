import {users} from "../route";

export async function GET(request, {params}){
    const {id} = params;
    const user=users.find(user=>user.id===parseInt(id));
    return Response.json(user);
}