import React from "react";
import useSWR from "swr";
import { DateTime } from "luxon";

const BASE_URL = `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USER}`;
const REPOSITORY_URL = `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`;

type Release = any;
type Releases = Release[];

type Props = { title?: string; repository: string };

const ReleaseCard = ({
  title,
  repository,
  release,
}: Props & { release?: Release }) => {
  const cardTitle = title || repository;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3 className="h5">
              {release && (
                <>
                  <a href={release.html_url}>{cardTitle}</a>&nbsp;
                  <small>{release.tag_name}</small>
                </>
              )}
              {!release && <span>{cardTitle}</span>}
            </h3>
          </div>
          {release && (
            <p className="card-text">
              Publié le{" "}
              {DateTime.fromISO(release.published_at).toLocaleString()}
            </p>
          )}
          {!release && (
            <a href={`${REPOSITORY_URL}/${repository}/releases`}>Releases</a>
          )}
        </div>
      </div>
    </div>
  );
};

const Release = ({ repository, ...others }: Props) => {
  const { data, error, isValidating } = useSWR<Releases>(
    `${BASE_URL}/${repository}/releases`
  );

  if (!!data)
    return (
      <ReleaseCard {...others} repository={repository} release={data[0]} />
    );
  else return <ReleaseCard {...others} repository={repository} />;
};

export default Release;
