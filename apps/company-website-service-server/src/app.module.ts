import { Module } from "@nestjs/common";
import { AboutUsPageModule } from "./aboutUsPage/aboutUsPage.module";
import { HomePageModule } from "./homePage/homePage.module";
import { ExternalLinkPageModule } from "./externalLinkPage/externalLinkPage.module";
import { ServicesPageModule } from "./servicesPage/servicesPage.module";
import { NewsPageModule } from "./newsPage/newsPage.module";
import { PartnerModule } from "./partner/partner.module";
import { ResourceModule } from "./resource/resource.module";
import { ContactUsPageModule } from "./contactUsPage/contactUsPage.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AboutUsPageModule,
    HomePageModule,
    ExternalLinkPageModule,
    ServicesPageModule,
    NewsPageModule,
    PartnerModule,
    ResourceModule,
    ContactUsPageModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
