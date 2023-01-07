import { tsunagaruDiscordId } from '@/constants/env';
import { BASE_DISCORD_URL } from '@/constants/links';

export const DiscordClient = {
  async isTsunagaruMember(accessToken: string): Promise<boolean> {
    const res: Response = await fetch(`${BASE_DISCORD_URL}/api/users/@me/guilds`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.ok) {
      const guilds: Guild[] = await res.json();
      const isTsunagaruMember = guilds.some((guild: Guild) => guild.id === tsunagaruDiscordId);
      if (isTsunagaruMember) return true;
    }
    return false;
  },
};

type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
  permissions_new: string;
};
