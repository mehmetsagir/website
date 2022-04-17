import dayjs from 'dayjs';
import { rgba } from 'polished';
import styled from 'styled-components';

import { EventProps } from '.';

type Props = {
  event: EventProps;
};

const Card: React.FC<Props> = ({ event }) => {
  return (
    <Container>
      <a
        className="title"
        href={`https://github.com/${event.repo}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.split('/')[1]}
      </a>
      <div className="commits">
        {event.commits.map((commit, key) => (
          <div className="commit" key={key}>
            <div className="message">
              <small>Commit Message:</small>&nbsp;
              <a
                href={`https://github.com/${event.repo}/commit/${commit.commit_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {commit.commit_message}
              </a>
            </div>
            <div className="created_at">
              {dayjs(commit.created_at).format('HH:mm - DD.MM.YYYY')}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  .title {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.link};
    &:hover {
      text-decoration: underline;
    }
  }
  .commits {
    margin: 0 0 10px 7px;

    .commit {
      margin: 2px 0;
      line-height: 1.5;
      display: flex;
      align-items: center;
      justify-content: space-between;

      small {
        font-size: 10px;
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.5;
      }

      .message {
        font-size: 12px;
        color: ${({ theme }) => rgba(theme.colors.text, 0.6)};

        a:hover {
          color: ${({ theme }) => theme.colors.link};
          text-decoration: underline;
        }
      }

      .created_at {
        font-size: 10px;
        opacity: 0.5;
        color: ${({ theme }) => theme.colors.textSecondary};
      }
    }
  }
`;

export default Card;
