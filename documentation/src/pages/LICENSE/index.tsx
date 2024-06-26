import React from "react";
import Head from "@docusaurus/Head";
import { BlogFooter } from "@site/src/refine-theme/blog-footer";
import { CommonHeader } from "@site/src/refine-theme/common-header";
import { CommonLayout } from "@site/src/refine-theme/common-layout";
import clsx from "clsx";

const License: React.FC = () => {
    return (
        <CommonLayout>
            <Head title="LICENSE | OpenPanel">
                <html data-page="support" data-customized="true" />
            </Head>
            <div className="refine-prose">
                <CommonHeader hasSticky={true} />

                <div className="flex-1 flex flex-col pt-8 lg:pt-16 pb-32 max-w-[800px] w-full mx-auto px-2">
                    <h1>License</h1>
                    
                

                </div>
                <BlogFooter />
            </div>
        </CommonLayout>
    );
};

export default License;
