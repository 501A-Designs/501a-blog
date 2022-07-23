import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトはチームのためのブログスターター
              <a href="https://github.com/catnose99/team-blog-hub" target="_blank" rel="noreferrer">
                Team Blog Hub
              </a>
              のテンプレートをもとに作成しました。
            </p>
            <p>現在は自分（501A）のnote、Zenn、Devなどで投稿したブログ記事をまとめたものです。</p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
