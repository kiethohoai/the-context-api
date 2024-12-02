import { useContext } from 'react';
import { PostContext } from './PostContext';

export default function usePost() {
  const context = useContext(PostContext);
  if (context === undefined) throw new Error(`Can't not use PostContext outside PostProvider!`);
  return context;
}
