import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogPictures } from '../../redux/action-creators/getDogPictures';
import { getPosts } from '../../redux/action-creators/getPosts';

export const DogViewGeneral = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    appState.posts.length < 1 ? dispatch(getPosts()) : null;
    appState.dogPics.length < 1 ? dispatch(getDogPictures()) : null;
  }, []);

  return (
    <div>
      {appState.posts.map((item, index) => (
        <h1 key={index}>{item.id}</h1>
      ))}
    </div>
  );
};
