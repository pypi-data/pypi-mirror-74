from dataclasses import dataclass

@dataclass
class UserResponse:
    pk: int = None
    username: str = None
    full_name: str = None
    is_private: bool = None
    profile_pic_url: str = None
    profile_pic_id: str = None
    is_verified: bool = None
    has_anonymous_profile_picture: bool = None
    media_count: int = None
    geo_media_count: int = None
    follower_count: int = None
    following_count: int = None
    following_tag_count: int = None
    biography: int = None
    biography_with_entities: dict = None
    external_url: str = None
    external_lynx_url: str = None
    total_igtv_videos: int = None
    usertags_count: int = None
    is_favorite: bool = None
    is_favorite_for_stories: bool = None
    live_subscription_status: str = None
    has_chaining: bool = None
    hd_profile_pic_versions: list = None
    hd_profile_pic_url_info: dict = None
    mutual_followers_count: int = None
    show_shoppable_feed: bool = None
    shoppable_posts_count: int = None
    can_be_reported_as_fraud: bool = None
    merchant_checkout_style: str = None
    seller_shoppable_feed_type: str = None
    is_eligible_for_smb_support_flow: bool = None
    displayed_action_button_partner: str = None
    smb_donation_partner: str = None
    smb_support_partner: str = None
    smb_delivery_partner: str = None
    smb_support_delivery_partner: str = None
    displayed_action_button_type: str = None
    direct_messaging: str = None
    fb_page_call_to_action_id: str = None
    address_street: str = None
    business_contact_method: str = None
    category: str = None
    city_id: int = None
    city_name: str = None
    contact_phone_number: str = None
    is_call_to_action_enabled: bool = None
    latitude: float = None
    longitude: float = None
    public_email: str = None
    public_phone_country_code: str = None
    public_phone_number: str = None
    zip: str = None
    instagram_location_id: str = None
    is_business: bool = None
    account_type: int = None
    professional_conversion_suggested_account_type: int = None
    can_hide_category: bool = None
    can_hide_public_contacts: bool = None
    should_show_category: bool = None
    should_show_public_contacts: bool = None

@dataclass
class UserInfoByNameResponse(UserResponse):
    status: str = None