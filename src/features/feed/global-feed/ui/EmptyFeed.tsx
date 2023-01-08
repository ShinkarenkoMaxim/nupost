interface Props {
  isEmpty: boolean;
}

export const EmptyFeed = ({ isEmpty }: Props) => {
  return isEmpty ? <span>Your feed is empty</span> : null;
};
