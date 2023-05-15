import React, { FC } from "react";
import useSWR from "swr";
import { DateTime } from "luxon";

const LIMIT = 12;
const GITHUB_URL = `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER}/repos?sort=updated&per_page=${LIMIT}`;

type Repository = any;
type Repositories = Repository[];

const Repository: FC<{ repository: Repository }> = ({ repository }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3 className="h5">
              <a href={repository.html_url}>{repository.name}</a>
            </h3>
          </div>
          <p className="card-text">{repository.description}</p>
        </div>
        <div className="card-footer">
          <div className="row g-1">
            <div className="col">
              {!!repository.updated_at &&
                DateTime.fromISO(repository.updated_at).toLocaleString()}
            </div>
            <div className="col">
              {!!repository.language && repository.language}
            </div>
            <div className="col">
              {repository.license?.spdx_id &&
                repository.license.spdx_id != "NOASSERTION" &&
                repository.license.spdx_id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Repositories: FC<{ repositories: Repositories }> = ({ repositories }) => {
  return (
    <div className="Repositories">
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        {repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

const GitHub = () => {
  const { data, error, isValidating } = useSWR<Repositories>(GITHUB_URL);

  if (isValidating) return <span>Loading</span>;
  else if (error) return <span>Error</span>;
  else if (!!data) return <Repositories repositories={data} />;
  else return null;
};

export default GitHub;
