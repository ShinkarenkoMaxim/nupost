import { useEffect } from 'react';
import { useList } from 'effector-react';
import Stack from '@mui/material/Stack';
import * as model from '../model';
import { Loader } from '@/shared/ui/components/loader';
import { ReviewCard } from '@/entities/review/ui';
import { EmptyFeed } from './EmptyFeed';

export const Feed = () => {
  const isEmpty = model.selectors.useIsEmptyFeed();
  const isLoading = model.selectors.useGetFeedLoading();

  useEffect(() => {
    model.getFeedFx();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Stack spacing={4}>
        {useList(model.$reviews, (item, key) => (
          <ReviewCard review={item} key={key} />
        ))}
      </Stack>
      <EmptyFeed isEmpty={isEmpty} />
    </>
  );
};
