import { Card, CardDescription, CardHeader } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ProfileSection, ProfileSectionTrigger, useSections } from './profile-section';

export default function ProfileTabs() {
  const sectionNames = useSections().sectionNames;

  return (
    <Tabs defaultValue="feed" className="my-7">
      <TabsList className="flex flex-col md:flex-row lg:grid lg:grid-cols-5 h-fit">
        <TabsTrigger value="feed" className="w-full">
          Feed
        </TabsTrigger>

        {sectionNames.map((sectionName) => (
          <ProfileSectionTrigger key={sectionName} section={sectionName} />
        ))}
      </TabsList>

      <TabsContent value="feed">
        <Card>
          <CardHeader>
            <CardDescription>
              Neste painel você encontra informações e atualizações sobre a pesquisa corrente.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>

      {sectionNames.map((sectionName) => (
        <ProfileSection key={sectionName} section={sectionName} />
      ))}
    </Tabs>
  );
}
