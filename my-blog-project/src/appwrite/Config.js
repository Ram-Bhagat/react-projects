import conf from "./../conf/conf";
import {Client, ID, Databases,Storage,Query} from 'appwrite';

export class DatabaseSevice{
   client = new Client()
   database;
   bucket;

   constructor(){
    this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket =  new Storage(this.client);
   }

   async createPost({title,slug,content,featuredImage,status,userId}){
    try {
        return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug, // use for unique id 
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }

        )
    } catch (error) {
        console.log('createPost error ::',error);
    }
   }

   async updatePost(slug /*as an unique id */,{title,content,featuredImage,status}){
    try {
        return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug, // use for unique id 
            {
                title,
                content,
                featuredImage,
                status
                
            }

        )
    } catch (error) {
        console.log('updatePost error ::',error);
    }
   }
    
   async deletePost(slug/*as an unique id */){
    try {
        await this.database.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
      return true
    } catch (error) {
        console.log('deletepost error ::',error);
        return false
    }
   }

   async getPost(slug /*as an unique id */){
    try {
       return await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log('getPost error ::',error);
    }
   }

   async getposts(){
    try {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            [
                Query.equal('status','active'),
            ]
            
        )
    } catch (error) {
        console.log('getposts error ::',error); 
        return false
    }
   }

   //file upload service

   async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log('upoadFile error ::',error);
        return false
    }
   }
   async deleteFile(fileId){
    try {
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log('deleteFile error ::',error);
        return false
    }
   }

   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
   }
}

const databaseService = new DatabaseSevice()

export default databaseService