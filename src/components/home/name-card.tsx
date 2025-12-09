import GitHub from 'dev-icons/icons/GithubOriginal';
import { SiDiscord as Discord } from 'simple-icons';
import { Avatar } from '../ui/avatar.tsx';
import { Card, CardHeader, CardTitle } from '../ui/card.tsx';

export default function NameCard({
  ...props
}: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader className="flex h-full flex-col items-center justify-center gap-2">
        <Avatar className="size-14">
          <img src="https://github.com/k0d13.png" alt="Apteryx" />
        </Avatar>

        <CardTitle className="space-x-2 text-3xl">
          <span>Kodie</span>

          <a
            className="inline-flex items-center justify-center"
            href="https://github.com/k0d13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="[&>*]:!fill-foreground inline" size={24} />
          </a>

          <a
            className="inline-flex items-center justify-center"
            href="https://discord.gg/k6HWWM565z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className="[&>*]:!fill-foreground inline" size={24} />
          </a>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
