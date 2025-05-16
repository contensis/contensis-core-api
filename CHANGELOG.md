# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-05-16
### Added
- Support for *aggregations* in entries search
### Changed
- Fix typo in *ContensisClassicRefreshTokenGrant* TypeScript interface

## [1.1.1] - 2024-09-18
### Added
 - Missing *pageCount* to *PagedList*
 - Missing fields from *Project*
 - Missing fields from *VersionInfo*
 - Exported *ContentTypeFormat* 

## [1.1.0] - 2024-02-28
### Added
- Support for new *fieldLinkDepths* parameter

## [1.0.5] - 2022-06-08
### Added
- The *ZenqlQuery* and *ManagementZenqlQuery* classes
### Changed
- split query related classes in separate files

## [1.0.4] - 2021-10-07
### Added
- Extended *freeText* expression to support fuzzy search and operator switch

## [1.0.3] - 2021-05-24
### Added
- Added *ManagementQuery* type as an alternative to the *Query* type that removes the *fields* property

## [1.0.2] - 2021-03-12
### Changed
- Updated Content type definitions

## [1.0.1] - 2020-11-04
### Changed
- general release

## [1.0.0-rc.1] - 2020-09-01
### Added
- extended the http client behaviour and allowed the custom response handler to be called on successful api requests.

## [1.0.0-beta.10] - 2020-07-21
### Added
- added *ContensisApplicationError* and *ContensisAuthenticationError* classes

## [1.0.0-beta.9] - 2020-06-30
### Added
- added support for 'contensis_classic_refresh_token' flow

## [1.0.0-beta.8] - 2020-06-29
### Added
- added support for 'contensis_classic' flow

## [1.0.0-beta.7] - 2020-06-18
### Changed
- added support for multiple client types

## [1.0.0-beta.6] - 2020-05-26
### Changed
- the fetch function can now be injected to support better testing

## [1.0.0-beta.5] - 2020-05-21
### Added
- search query classes and interfaces
### Removed
- removed Entry and EntrySys interfaces

## [1.0.0-beta.4] - 2019-12-18
### Added
- support for default headers

## [1.0.0-beta.3] - 2019-12-12
### Added
- Updated component model

## [1.0.0-beta.2] - 2019-12-11
### Added
- Component model

## [1.0.0-beta.1] - 2019-12-05
### Added
- Asset models

## [1.0.0-beta.0] - 2019-11-29
### Added
- extracted initial types used by both contensis-delivery-api and contensis-management-api