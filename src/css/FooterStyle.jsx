import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: var(--color-padrao2);
  padding-top: 20px;

  .footer_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 40px 100px;
    border-bottom: 1px solid var(--color-padrao4);
  }

  .footer_content {
    text-align: center;
  }

  .footer_text {
    margin: auto;
    width: 190px;
    padding: 5px;
  }
  .footer_text p {
    color: var(--color-padrao1);
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--color-padrao5);
  }

  .footer_content ul {
    list-style-type: none;
    padding: 0;
  }

  .footer_content a {
    text-decoration: none;
    color: var(--color-padrao1);
    transition: color 0.3s ease;
  }

  .footer_content a:hover {
    color: var(--color-padrao5);
  }

  li {
    list-style-type: none;
  }

  .footer_list li {
    padding: 7px;
    position: relative;
  }

  .footer_list li::before {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 100%;
    width: 0;
    height: 2px;
    background: var(--color-padrao5);
    transition-duration: 0.5s;
  }

  .footer_list li:hover::before {
    width: 70px;
  }

  .social_icons {
    text-align: center;
  }

  .social_icons i {
    color: var(--color-padrao6);
    font-size: 25px;
    margin-right: 10px;
    transition: color 0.3s ease;
  }

  .social_icons i:hover {
    color: var(--color-padrao5);
  }

  .footer_bottom {
    background: var(--color-padrao1);
    text-align: center;
    padding: 5px 0;
    margin-top: 20px;
  }

  .footer_bottom p {
    color: black;
    margin: 0;
    font-size: 16px;
  }

  input {
    border-radius: 3px;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`                   
