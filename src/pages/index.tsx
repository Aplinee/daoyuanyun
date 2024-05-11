import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {useEffect} from "react";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            五分钟上手 道源云 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

    export default function Home(): JSX.Element {
      const {siteConfig} = useDocusaurusContext();
        function redirectToDocs() {
            window.location.href = '/docs/intro';
        }
        useEffect(() => {
            redirectToDocs();
        }, []); // 空依赖数组确保这个效果仅在组件挂载时运行一次

}
