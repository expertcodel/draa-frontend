import { NextResponse } from "next/server";

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const response = NextResponse.next();

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

    matcher: ['/courses', '/books', '/blog']
}