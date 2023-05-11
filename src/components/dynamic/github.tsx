import React, { FC } from "react";
import useSWR from "swr";

const GITHUB_URL =
  "https://api.github.com/search/repositories?q=user%3Apnx-si&sort=updated&order=desc";

type Repository = any;
type Repositories = Repository[];
type Response = {
  total_count: number;
  incomplete_results: boolean;
  items: Repositories;
};

const Repository: FC<{ repository: Repository }> = ({ repository }) => {
  return (
    <div className="col-sm-6 col-sm-4 col-md-3">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            {repository.owner && (
              <span className="text-secondary">{repository.owner.login}</span>
            )}
            <h3 className="h4">
              <a href={repository.html_url}>{repository.name}</a>
            </h3>
          </div>
          <div className="mb-3">{repository.description}</div>
          <div className="mb-3">
            {repository.language && (
              <span className="badge text-bg-secondary me-1">
                {repository.language}
              </span>
            )}
            {repository.license &&
              repository.license.spdx_id != "NOASSERTION" && (
                <span className="badge text-bg-secondary me-1">
                  {repository.license.spdx_id}
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Repositories: FC<{ repositories: Repositories }> = ({ repositories }) => {
  return (
    <div className="Repositories">
      <div className="row g-3">
        {repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

const GitHub = () => {
  const { data, error, isValidating } = useSWR<Response>(GITHUB_URL);

  if (isValidating) return <span>Loading</span>;
  else if (error) return <span>Error</span>;
  else if (!!data) return <Repositories repositories={data.items} />;
  else return null;
};

export default GitHub;
