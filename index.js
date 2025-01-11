```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    //Check route existence before navigation
    router.push('/contact', undefined, { shallow: true });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```
```javascript
//pages/contact.js
export default function Contact(){
    return(
        <div>Contact Page</div>
    );
}
```