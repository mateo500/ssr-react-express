import React, { useState, useEffect } from 'react';
import './dogCard.styl';
import { Fade } from 'react-awesome-reveal';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  addDog,
  deleteDog,
  editDog,
} from '../../redux/action-creators/localOps';

export const DogCard = ({
  dogBreed,
  imgUrl,
  activeButtons,
  hideLikeButton,
  isEditable,
  dogName,
  dogId,
  likesSaved,
}) => {
  const [likes, setLikes] = useState(0);
  const [dogSaved, setDogSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [dogEditedName, setDogEditedName] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      confirmation &&
      window.confirm('do you really want to delete this doggy?')
    ) {
      dispatch(deleteDog(dogId));
      setConfirmation(!confirmation);
    } //we have to use useEffect to run this in the browser, since we are using the confirm API
  }, [confirmation]);

  const handleDogSave = () => {
    if (!dogSaved) {
      dispatch(addDog({ dogBreed, imgUrl, likes, dogId: uuid(), dogName: '' }));
      setDogSaved(true);
    }

    return null;
  };

  const handleEdit = () => {
    if (isEditing && dogEditedName.length >= 1) {
      dispatch(editDog(dogId, dogEditedName));
    }
    setIsEditing(!isEditing);
  };

  const handleDogDelete = () => {
    setConfirmation(!confirmation);
  };

  return (
    <Fade triggerOnce>
      <section className='card'>
        <img className='card-image' src={imgUrl} alt='dog-random-pic' />
        <h4 className='card-title'>Breed: {dogBreed}</h4>
        {isEditable ? (
          <h4 style={{ paddingLeft: '20px' }}>Likes😍: {likesSaved}</h4>
        ) : null}
        {isEditable ? (
          isEditing ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
              }}
            >
              <input
                placeholder={dogName || 'put a name to your dog...'}
                type='text'
                onChange={(e) => setDogEditedName(e.target.value)}
              />
              <button onClick={() => setIsEditing(!isEditing)} type='button'>
                cancel
              </button>
            </div>
          ) : (
            <div style={{ margin: '20px' }}>
              <p>Dog Name: {dogName || 'no name asigned yet🤓'}</p>
            </div>
          )
        ) : null}
        {activeButtons ? (
          <div className='buttons-container'>
            {hideLikeButton ? null : (
              <button onClick={() => setLikes((n) => n + 1)} type='button'>
                Like Doggy😍 {likes}
              </button>
            )}
            <button onClick={handleDogSave} type='button'>
              {dogSaved ? 'Dog Saved!😎' : 'Save Doggy👻'}
            </button>
          </div>
        ) : null}
        {isEditable ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px',
              paddingTop: isEditing ? '15px' : '0px',
            }}
          >
            <button onClick={handleEdit} type='button'>
              {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={handleDogDelete} type='button'>
              delete Doggy😔
            </button>
          </div>
        ) : null}
      </section>
    </Fade>
  );
};
