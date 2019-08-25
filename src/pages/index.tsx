import * as React from 'react';
import './index.css';
import Layout from '../components/Layout/Layout';
import Logo from '../components/Logo/Logo';

interface Props {
  noIdea: string;
}

const IndexPage: React.SFC<Props> = () => (
  <Layout>
    <div className="page-index">
      <Logo animated theme="gigantic" />
      <div className="page-index__announcement">
        coming soon
      </div>
    </div>
  </Layout>
);

export default IndexPage;
