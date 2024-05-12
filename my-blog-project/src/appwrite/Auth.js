import conf from "./../conf/conf";
import {Client, Account, ID} from 'appwrite';


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl) 
                .setProject(conf.appwriteProjectId); 

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
           const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                //call another method   
                this.login(email,password)
            } else {
                return userAccount
            }
        } catch (error) {
            console.log('createAccount error ::',error);
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log('login error ::',error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            throw new Error("Failed to retrieve current user");
        }
    }
    
    
    async logout(){
        try {
            await this.account.deleteSessions() 
        } catch (error) {
            console.log('logout error ::', error);
        }
    }
}

const authService = new AuthService();

export default authService