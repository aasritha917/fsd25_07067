function getAccess(user) {
    let message = (user.role === "admin") ? 
                    (user.active ? "Admin Access Granted!" : "Admin Access Revoked") :
                  (user.role === "user") ? 
                    (user.active ? "User Access Granted!" : "User Access Revoked") :
                  "Access Denied";

    console.log(message);
}


let user1 = { name: "Alice", role: "admin", active: false };
let user2 = { name: "Bob", role: "user", active: true };
let user3 = { name: "Charlie", role: "guest", active: true };

getAccess(user1); 
getAccess(user2); 
getAccess(user3); 
