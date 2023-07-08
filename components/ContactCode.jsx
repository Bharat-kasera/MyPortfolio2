import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'bharat.kj044@gmail.com',
    href: 'mailto:bharat.kj044@gmail.com',
  },
  {
    social: 'github',
    link: 'Bharat_k',
    href: 'https://github.com/Bharat-kasera',
  },
  {
    social: 'linkedin',
    link: 'BharatKasera',
    href: 'https://www.linkedin.com/in/bharat-kasera-481a27263/',
  },
  {
    social: 'instagram',
    link: 'bharat_ui',
    href: 'https://www.instagram.com/bharat_ui/',
  },
  {
    social: 'telegram',
    link: 'Bh_099',
    href: 'https://t.me/Bh_099',
  },
  {
    social: 'dribble',
    link: 'Bharat_UI',
    href: 'https://dribbble.com/__wolf',
  },
  {
    social: 'Bharat Kasera',
    link: 'Bharat_UI',
    href: 'https://www.behance.net/bharat_ui',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
