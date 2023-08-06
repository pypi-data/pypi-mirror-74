#include "GAnalytics.h"
#include "GameAnalyticsImpl.h"
#include "GameAnalytics.h"

using namespace gameanalytics;

GAnalytics* GAnalytics::instance = nullptr;

GAnalytics::GAnalytics()
	: m_gameAnalyticsImpl(new GameAnalyticsImpl())
	, m_autoTest(false)
{
}
GAnalytics::~GAnalytics()
{
	m_gameAnalyticsImpl->Release();
}

void GAnalytics::init(const char* version, const char* game_key, const char* secret_key, bool debug, bool auto_test)
{
	m_autoTest = auto_test;
	m_gameAnalyticsImpl->Init(version, game_key, secret_key, debug);

	info_json["game_key"] = game_key;
	info_json["secret_key"] = secret_key;
	info_json["debug"] = debug;
	info_json["event"]["start"] = json::array();
	info_json["event"]["fail"] = json::array();
	info_json["event"]["complete"] = json::array();
}

void GAnalytics::release()
{
	m_gameAnalyticsImpl->Release();
}

void GAnalytics::addProgressionEvent(int progressionStatus, const char* progression01, const char* progression02, const char* progression03)
{
	m_gameAnalyticsImpl->addProgressionEvent(progressionStatus, progression01, progression02, progression03);
	
	if (m_autoTest)
	{
		switch (progressionStatus)
		{
		case EGAProgressionStatus::Start:
			info_json["event"]["start"].push_back(progression01);
			break;
		case EGAProgressionStatus::Fail:
			info_json["event"]["fail"].push_back(progression01);
			break;
		case EGAProgressionStatus::Complete:
			info_json["event"]["complete"].push_back(progression01);
			break;
		}
	}
}

void GAnalytics::addProgressionEvent(int progressionStatus, const char* progression01, const char* progression02, const char* progression03, int score)
{
	m_gameAnalyticsImpl->addProgressionEvent(progressionStatus, progression01, progression02, progression03, score);
	
	if (m_autoTest)
	{
		switch (progressionStatus)
		{
		case EGAProgressionStatus::Start:
			info_json["event"]["start"].push_back(progression01);
			break;
		case EGAProgressionStatus::Fail:
			info_json["event"]["fail"].push_back(progression01);
			break;
		case EGAProgressionStatus::Complete:
			info_json["event"]["complete"].push_back(progression01);
			break;
		}
	}
}

void GAnalytics::addDesignEvent(const char* eventId)
{
	m_gameAnalyticsImpl->addDesignEvent(eventId);
}

void GAnalytics::addDesignEvent(const char* eventId, double value)
{
	m_gameAnalyticsImpl->addDesignEvent(eventId, value);
}
