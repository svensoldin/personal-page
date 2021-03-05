import Image from 'next/image';

const ProfilePicture = () => (
  <div className='my-4'>
    <Image
      src='/profile.jpg'
      alt='picture of the author'
      width={68}
      height={72}
      className='rounded-full'
    />
  </div>
);

export default ProfilePicture;
