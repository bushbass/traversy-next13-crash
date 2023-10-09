import React from 'react';
import { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back to repositories
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Repo name={name}></Repo>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDirs name={name}></RepoDirs>
      </Suspense>
    </div>
  );
};

export default RepoPage;
