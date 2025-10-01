export const users=[
    {id:1,name:"John",email:"john@gmail.com"},
    {id:2,name:"Jane",email:"jane@gmail.com"},
    {id:3,name:"Jim",email:"jim@gmail.com"},
    {id:4,name:"Jill",email:"jill@gmail.com"},
    {id:5,name:"Jack",email:"jack@gmail.com"}
]

export async function GET(){
    return Response.json(users);
}

export async function POST(request){
    const user=await request.json();
    const newUser={
        id:users.length+1,
        name:user.name,
        email:user.email
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201,
    })
}