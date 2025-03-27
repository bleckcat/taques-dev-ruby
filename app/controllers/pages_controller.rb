class PagesController < ApplicationController
  def home
    @technologies = [
      { id: "ts", name: "TypeScript", title: "The Strict Sibling", description: "TypeScript is like a brother to me, always correcting me. Annoying? Yes. Helpful? Also yes. Love it, hate it, same thing.", modal_title: "TypeScript Details", modal_content: "TypeScript adds static types to JavaScript, making it more robust and easier to debug." },
      { id: "docker", name: "Docker", title: "The Ship Captain", description: "Docker is the captain that keeps all your messy code contained. Until you forget a port mapping—then your ship is lost at sea.", modal_title: "Docker Details", modal_content: "Docker containerizes applications, ensuring consistency across environments." },
      { id: "azure", name: "Azure", title: "The Cloud Overlord", description: "Azure is like a powerful kingdom. It gives you everything, but one wrong click and your wallet cries for mercy.", modal_title: "Azure Details", modal_content: "Azure is Microsoft’s cloud platform with a vast array of services." },
      { id: "react", name: "React", title: "The UI Magician", description: "React is like a wizard, components appear and disappear before your eyes. Use hooks wrong? Poof, now it’s chaos.", modal_title: "React Details", modal_content: "React is a JavaScript library for building dynamic user interfaces." },
      { id: "ruby", name: "Ruby", title: "The Fancy Butler", description: "Ruby is that elegant friend who insists on making everything smooth and readable. It hands you the code on a silver platter, with a ‘sir’ at the end.", modal_title: "Ruby Details", modal_content: "Ruby powers Rails and emphasizes developer happiness." },
      { id: "python", name: "Python", title: "The Friendly Snake", description: "Python is that chill friend who understands everything, but if you mess up the indentation... well, good luck.", modal_title: "Python Details", modal_content: "Python is versatile and beginner-friendly with a focus on readability." }
    ]
  end

  def about_me
  end
end
