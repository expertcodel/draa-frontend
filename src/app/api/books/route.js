import { NextResponse } from "next/server";
import { bookModel } from "../../models/book.model";
import { book_categoryModel } from "../../models/book_category.model";
import { Op } from "sequelize";
export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const name = input.get('name');
    const page = input.get('page');
    const book_category = input.get('book_category');
    const sort = input.get('sort');
    const bookmodel = bookModel();
    const categorymodel = book_categoryModel();
    try {

        if (book_category === 'null') {

            const { rows, count } = await bookmodel.findAndCountAll({ where: { [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: (page - 1) * 12, limit: 12, attributes: [`id`, `description`, `title`, `image`, `publish_date`, `author`, `slug`], order: sort === "1" ? [['created_at', 'DESC']] : sort === "0" ? [['created_at', 'ASC']] : [['serial_number', 'ASC']] });
            return NextResponse.json({ status: true, booklist: rows, totalItems: count });

        }
        else {

            const { id } = await categorymodel.findOne({ where: { slug: book_category }, attributes: ['id'] })
            const { rows, count } = await bookmodel.findAndCountAll({ where: { book_category_id: id, [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: (page - 1) * 12, limit: 12, attributes: [`id`, `description`, `title`, `image`, `publish_date`, `author`, `slug`], order: sort === "1" ? [['created_at', 'DESC']] : sort === "0" ? [['created_at', 'ASC']] : [['serial_number', 'ASC']] });
            return NextResponse.json({ status: true, booklist: rows, totalItems: count });

        }


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}


export async function POST(request) {

    const { slug } = await request.json();
    const bookmodel = bookModel();
    const categorymodel = book_categoryModel();
    try {


        const bookdetail = await bookmodel.findOne({
            where: { slug },
            attributes: [
                `id`, `description`, `title`, `home_image`, `publish_date`, `author`, 'meta_description', 'meta_keywords',
                'seo_title', `book_category_id`, `price`
            ]
        });

        const category = await categorymodel.findOne({ where: { id: bookdetail.book_category_id }, attributes: ['name', 'slug'] })
        const booklist = await bookmodel.findAll({ order: [['created_at', 'DESC']], limit: 3, attributes: ['id', 'image', 'publish_date', 'title', 'slug', 'author'] });
        console.log(bookdetail, "details");

        return NextResponse.json({
            status: true,
            bookdetail: { ...bookdetail.dataValues, category: category.name, slug: category.slug },
            booklist
        });


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}