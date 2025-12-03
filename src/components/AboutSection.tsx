export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            After graduating from{' '}
            <span className="font-medium text-foreground">
              SMK Bhakti Insani Bogor
            </span>{' '}
            with a focus on Software Engineering, I decided to pursue my passion
            for programming. I enrolled in a coding bootcamp at{' '}
            <span className="font-medium text-foreground">
              Cronos Studio Indonesia
            </span>{' '}
            and learned{' '}
            <span className="font-medium text-foreground">
              full-stack web development
            </span>
            .
          </p>

          <p>
            <em className="not-italic text-foreground">
              My favorite part of programming is the problem-solving aspect.
            </em>{' '}
            I love the feeling of finally figuring out a solution to a complex
            problem. My core stack is{' '}
            <span className="font-medium text-foreground">
              React.js, Next.js, TypeScript, and Golang
            </span>
            . I am also familiar with Drupal CMS development and DevOps tools
            like Jenkins.
          </p>

          <p>
            Currently, I'm working at{' '}
            <span className="font-medium text-foreground">
              PT Bank Rakyat Indonesia (BRI)
            </span>{' '}
            as a Frontend Engineer, contributing to the development of banking
            applications and internal dashboards. I'm always eager to learn new
            technologies and take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};
