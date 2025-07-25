import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const response = NextResponse.next();
    const statusKey = await cookies().get('statusKey')

    if (pathname.startsWith('/success')) {

        const token = new URL(request.url).searchParams.get('token');
        if (!statusKey) {
            return NextResponse.redirect(new URL('/courses', request.url));
        }

        await cookies().delete('statusKey')
        if (token !== statusKey.value) {
            return NextResponse.redirect(new URL('/courses', request.url));
        }



    }

    if (pathname.startsWith('/failed')) {

        const token = new URL(request.url).searchParams.get('token');

        if (!statusKey) {
            return NextResponse.redirect(new URL('/courses', request.url));
        }

        await cookies().delete('statusKey')
        if (token !== statusKey.value) {
            return NextResponse.redirect(new URL('/courses', request.url));
        }
    }

    if (pathname.startsWith('/courses')) {
        response.headers.set('x-pathname', new URL(request.url).searchParams.get('course_name'));
    }
    else if (pathname.startsWith('/books')) {
        response.headers.set('x-pathname', new URL(request.url).searchParams.get('book_category'));
    }
    else if (pathname.startsWith('/blog')) {
        response.headers.set('x-pathname', new URL(request.url).searchParams.get('category'));
    }

    return response;
}

export const config = {

    matcher: ['/courses', '/books', '/blog', '/success', '/failed']
}