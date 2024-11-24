import Link from "next/link";
import { ReactElement } from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "../links/NextLink";

// ========================================================
interface BlogCard2Props {
  link: string;
  title: string;
  category: string;
  description: string;
  cardTop: ReactElement;
}
// ========================================================

export default function BlogCard2({ cardTop, title, category, description, link }: BlogCard2Props) {
  return (
    <>
   
    <article className="post">
      <div className="card">
        {/* {cardTop} */}

        <div className="card-body">
          <div className="post-header">

            <h2 className="post-title mt-1 mb-0">
              <NextLink title={title} className="link-dark" href={link} />
            </h2>
            
          </div>

        </div>

        
      </div>
    </article>
    
    </>
  );
}
