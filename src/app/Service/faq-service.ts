export class FaqService {
  faq: any[] | undefined;
  getFaq () {
    this.faq =
      [
        {
          "question": "How does Capsule work?",
          "answer": "Capsule makes it easy to create stylized video content with the people who matter most to you, whether that’s employees, customers, students, fans, friends, or however you define community. Just create an account, set up your Capsule, and invite as many people as you want to record videos!"
        },
        {
          "question": "How long will it take to create a Capsule?",
          "answer": "You can start collecting videos in less than five minutes with our self-service plans. For added customization and integration, Pro and Enterprise Capsule creation timelines will vary based on your needs."
        },
        {
          "question": "How do I share a Capsule with my community?",
          "answer": "Every Capsule you create will have a unique link ready to share. Blast that link out on social media, post it on your website, share it in your newsletter, and broadcast it to your entire company!"
        },
        {
          "question": "Does my community need to download an app to create videos?",
          "answer": "Nope! People can create videos from anywhere without a special app. All they need is internet access and a device that can record videos like a smartphone, tablet, or computer."
        },
        {
          "question": "What payment do you accept?",
          "answer": "We accept online credit card payments from Visa, Mastercard, Discover, and American Express. All payments are securely processed through Stripe. Enterprise customers can also pay by invoice, wire, or ACH transfer. All prices are in USD.\n"
        }
      ];
    return this.faq;
  }
}
