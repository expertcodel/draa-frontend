"use client";

import Image from "next/image";
import Link from "next/link";

export default function Breadcrumb({ title  }) {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>{title}</li>
            </ul>
            <h2>{title}</h2>
        </div>
      </div>
      <div className="shape9">
        <Image width={22} height={22} src="/images/shape/shape8.svg" alt="shape" />
      </div>
    </div>
  );
}
