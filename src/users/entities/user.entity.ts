import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
   @Column({primary:true, generated:true}) 
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    userName:string;

    @Column({unique:true})
    email: string;
    
    @Column()
    password:string;

    @Column({default:'user'})
    rol:string;


    @DeleteDateColumn()
    deletedAd: Date;
}
