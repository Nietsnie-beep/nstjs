import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Mercaditto {
    @Column({primary:true, generated:true})
    id: number;

    @Column()
    name:string;

    @Column()
    sku:number;

    @Column()
    price : number;

    @DeleteDateColumn()
    deleteadAt: Date;

}
