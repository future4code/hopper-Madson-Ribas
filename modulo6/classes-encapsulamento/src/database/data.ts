import { Product } from "../models/Product";
import { PurchaseDB } from "../models/Purchase";
import { User } from "../models/User";

export const users: User[] = [
    {
        id: "101",
        email: "astrodev@gmail.com",
        password: "bananinha"
    },
    {
        id: "102",
        email: "fulano@gmail.com",
        password: "qwerty00"
    },
    {
        id: "103",
        email: "ciclana@gmail.com",
        password: "asdfg123"
    }
]

export const products: Product[] = [
    new Product(
        "201",
        "Webcam",
        99.00),

    new Product(
        "202",
        "Teclado Gamer",
        250.00),

    new Product(
        "203",
        "Monitor",
        459.99),
    new Product(
        "204",
        "Impressora",
        275.25),
    new Product(
        "205",
        "Mouse Gamer",
        399.99)
]

export const purchases: PurchaseDB[] = [
    {
        id: "301",
        user_id: "101",
        product_id: "201",
        quantity: 1,
        total_price: 99.00
    },
    {
        id: "302",
        user_id: "101",
        product_id: "203",
        quantity: 1,
        total_price: 459.99
    },
    {
        id: "303",
        user_id: "101",
        product_id: "202",
        quantity: 2,
        total_price: 500.00
    }
]