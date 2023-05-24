import React, { FC } from "react";
import useSWR from "swr";
import { DateTime } from "luxon";

const BASE_URL = `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USER}`;

type Release = any;
type Releases = Release[];

const Release: FC<{ title?: string; repository: string }> = ({
  title,
  repository,
}) => {
  const { data, error, isValidating } = useSWR<Releases>(
    `${BASE_URL}/${repository}/releases`
  );

  if (isValidating) return <span>Loading</span>;
  else if (error) return <span>Error</span>;
  else if (!!data) {
    const release = data[0];
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h3 className="h5">
                <a href={release.html_url}>{title || repository}</a>{" "}
                <small>{release.tag_name}</small>
              </h3>
            </div>
            <p className="card-text">
              Publié le{" "}
              {DateTime.fromISO(release.published_at).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Release;
